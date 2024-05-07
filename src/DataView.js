import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

const DataView = () => {
  const graph = {
    nodes: [
      {
        id: 1,
        label: "Sun",
        title: "The star at the center of our solar system",
        color: "#ffff00",
      },
      {
        id: 2,
        label: "Mercury",
        title: "Closest planet to the sun, rocky and hot",
        color: "#c0c0c0",
      },
      {
        id: 3,
        label: "Venus",
        title: "Hottest planet, thick atmosphere",
        color: "#f0e68c",
      },
      {
        id: 4,
        label: "Earth",
        title: "Our home planet, life-supporting",
        color: "#007bff",
      },
      {
        id: 5,
        label: "Mars",
        title: "Red planet, potential for life",
        color: "#ff0000",
      },
      {
        id: 6,
        label: "Jupiter",
        title: "Largest planet, gas giant",
        color: "#ffd700",
      },
      {
        id: 7,
        label: "Saturn",
        title: "Second-largest planet, famous rings",
        color: "#ffa500",
      },
      {
        id: 8,
        label: "Uranus",
        title: "Ice giant, tilted axis",
        color: "#800080",
      },
      {
        id: 9,
        label: "Neptune",
        title: "Farthest gas giant, blue color",
        color: "#0000ff",
      },
      {
        id: 10,
        label: "Moon",
        title: "Earth's natural satellite",
        color: "#909090",
        parentId: 4,
      }, // Moon as a child of Earth
      {
        id: 11,
        label: "Phobos",
        title: "One of Mars' moons",
        color: "#a9a9a9",
        parentId: 5,
      },
      {
        id: 12,
        label: "Deimos",
        title: "One of Mars' moons",
        color: "#a9a9a9",
        parentId: 5,
      },
      {
        id: 13,
        label: "Io",
        title: "One of Jupiter's moons",
        color: "#a9a9a9",
        parentId: 6,
      },
      {
        id: 14,
        label: "Europa",
        title: "One of Jupiter's moons",
        color: "#a9a9a9",
        parentId: 6,
      },
      {
        id: 15,
        label: "Ganymede",
        title: "One of Jupiter's moons",
        color: "#a9a9a9",
        parentId: 6,
      },
      {
        id: 16,
        label: "Callisto",
        title: "One of Jupiter's moons",
        color: "#a9a9a9",
        parentId: 6,
      },
      {
        id: 17,
        label: "Titan",
        title: "One of Saturn's moons",
        color: "#a9a9a9",
        parentId: 7,
      },
      {
        id: 18,
        label: "Enceladus",
        title: "One of Saturn's moons",
        color: "#a9a9a9",
        parentId: 7,
      },
      {
        id: 19,
        label: "Miranda",
        title: "One of Uranus' moons",
        color: "#a9a9a9",
        parentId: 8,
      },
      {
        id: 20,
        label: "Triton",
        title: "One of Neptune's moons",
        color: "#a9a9a9",
        parentId: 9,
      },
      // Additional planets
      {
        id: 21,
        label: "Pluto",
        title: "Dwarf planet at the edge of the solar system",
        color: "#a9a9a9",
      },
      {
        id: 22,
        label: "Ceres",
        title: "Dwarf planet and largest object in the asteroid belt",
        color: "#a9a9a9",
      },
    ],
    edges: [
      { from: 1, to: 2 }, // Sun to Mercury
      { from: 1, to: 3 }, // Sun to Venus
      { from: 1, to: 4 }, // Sun to Earth
      { from: 1, to: 5 }, // Sun to Mars
      { from: 1, to: 6 }, // Sun to Jupiter
      { from: 1, to: 7 }, // Sun to Saturn
      { from: 1, to: 8 }, // Sun to Uranus
      { from: 1, to: 9 }, // Sun to Neptune
      { from: 4, to: 10 }, // Earth to Moon
      { from: 5, to: 11 }, // Mars to Phobos
      { from: 5, to: 12 }, // Mars to Deimos
      { from: 6, to: 13 }, // Jupiter to Io
      { from: 6, to: 14 }, // Jupiter to Europa
      { from: 6, to: 15 }, // Jupiter to Ganymede
      { from: 6, to: 16 }, // Jupiter to Callisto
      { from: 7, to: 17 }, // Saturn to Titan
      { from: 7, to: 18 }, // Saturn to Enceladus
      { from: 8, to: 19 }, // Uranus to Miranda
      { from: 9, to: 20 }, // Neptune to Triton
      // Additional edges
      { from: 1, to: 21 }, // Sun to Pluto
      { from: 1, to: 22 }, // Sun to Ceres
    ],
  };

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
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </div>
  );
};

export default DataView;
