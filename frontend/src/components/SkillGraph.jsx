import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const SkillGraph = ({ user, connections }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!user || !connections) return;

    const drawSkillGraph = () => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const width = 600;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      // Prepare data for skill network
      const nodes = [
        { id: user._id, type: 'user', name: 'You', skills: user.profile.skills },
        ...connections.map(conn => ({
          id: conn._id,
          type: 'connection',
          name: `${conn.profile.firstName} ${conn.profile.lastName}`,
          skills: conn.profile.skills
        }))
      ];

      // Create links based on shared skills
      const links = [];
      connections.forEach(conn => {
        const sharedSkills = user.profile.skills.filter(skill => 
          conn.profile.skills.includes(skill)
        );
        if (sharedSkills.length > 0) {
          links.push({
            source: user._id,
            target: conn._id,
            strength: sharedSkills.length / Math.max(user.profile.skills.length, conn.profile.skills.length)
          });
        }
      });

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-50))
        .force('center', d3.forceCenter(width / 2, height / 2));

      const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('stroke-width', d => d.strength * 5)
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6);

      const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .enter().append('circle')
        .attr('r', d => d.type === 'user' ? 10 : 6)
        .attr('fill', d => d.type === 'user' ? '#ff6b6b' : '#4ecdc4')
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));

      const label = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .text(d => d.name)
        .attr('font-size', 10)
        .attr('dx', 12)
        .attr('dy', 4);

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);

        label
          .attr('x', d => d.x)
          .attr('y', d => d.y);
      });

      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
    };

    drawSkillGraph();
  }, [user, connections]);

  return (
    <div>
      <h3>Skill Network Graph</h3>
      <svg
        ref={svgRef}
        width={600}
        height={400}
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
  );
};

export default SkillGraph;