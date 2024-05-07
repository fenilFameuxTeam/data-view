import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
const generateLargeGraphData = () => {
  const nodes = [];
  const edges = [];

  // Generating 200 nodes
  for (let i = 1; i <= 200; i++) {
    nodes.push({
      id: i,
      label: `Node ${i}`,
      title: `Node ${i} details here`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    });

    if (i > 1) {
      edges.push({
        from: Math.floor(Math.random() * (i - 1)) + 1,
        to: i,
      });
    }
  }

  return { nodes, edges };
};

const DataView2 = () => {
  const graph = generateLargeGraphData();
  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
  return (
    <div
      style={{
        height: "80vh",
      }}
    >
      <Graph graph={graph} options={options} events={events} />
    </div>
  );
};

export default DataView2;
