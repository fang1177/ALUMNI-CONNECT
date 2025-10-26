import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Paper, 
  Alert, 
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { CloudUpload, CheckCircle, Error } from '@mui/icons-material';
import * as XLSX from 'xlsx';
import axios from 'axios';

const BulkUpload = ({ entityType, onSuccess }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    setFile(selectedFile);
    setError(null);
    
    // Read file preview
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = evt.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Get headers and first few rows for preview
        const headers = jsonData[0];
        const previewRows = jsonData.slice(1, 6); // Show first 5 rows
        
        setPreview({ headers, rows: previewRows });
      } catch (error) {
        setError('Failed to parse Excel file. Please check the format.');
        setFile(null);
        setPreview([]);
      }
    };
    reader.readAsBinaryString(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    setError(null);
    
    try {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          
          // Send data to API
          const response = await axios.post(`/api/${entityType}/bulk-upload`, {
            data: jsonData
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          
          setUploadStatus({
            success: true,
            message: `Successfully uploaded ${jsonData.length} ${entityType}`,
            details: response.data
          });
          
          if (onSuccess) {
            onSuccess(response.data);
          }
        } catch (error) {
          setError(error.response?.data?.message || 'Failed to upload data');
          setUploadStatus({
            success: false,
            message: 'Upload failed',
            details: error.response?.data
          });
        } finally {
          setUploading(false);
        }
      };
      reader.readAsBinaryString(file);
    } catch (error) {
      setError('Failed to process file');
      setUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview([]);
    setUploadStatus(null);
    setError(null);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Bulk Upload {entityType.charAt(0).toUpperCase() + entityType.slice(1)}
      </Typography>
      
      {!file ? (
        <Box 
          sx={{ 
            border: '2px dashed #ccc', 
            borderRadius: 2, 
            p: 3, 
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover': { borderColor: 'primary.main' }
          }}
          onClick={() => document.getElementById('file-input').click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="body1" gutterBottom>
            Click to select or drag and drop an Excel file
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Supported formats: .xlsx, .xls
          </Typography>
        </Box>
      ) : (
        <Box>
          <Alert severity="info" sx={{ mb: 2 }}>
            File selected: {file.name}
          </Alert>
          
          {preview.headers && preview.rows && (
            <Box sx={{ mb: 3, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Preview (first 5 rows):
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      {preview.headers.map((header, index) => (
                        <TableCell key={index}>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {preview.rows.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <TableCell key={cellIndex}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          {uploadStatus && (
            <Alert 
              severity={uploadStatus.success ? "success" : "error"} 
              sx={{ mb: 2 }}
              icon={uploadStatus.success ? <CheckCircle /> : <Error />}
            >
              {uploadStatus.message}
            </Alert>
          )}
          
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleUpload}
              disabled={uploading || !file}
              startIcon={uploading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {uploading ? 'Uploading...' : 'Upload Data'}
            </Button>
            <Button 
              variant="outlined" 
              onClick={handleReset}
              disabled={uploading}
            >
              Reset
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default BulkUpload;