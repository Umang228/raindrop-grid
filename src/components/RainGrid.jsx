import React, { useEffect, useState } from "react";

const RainGrid = ({ rows = 20, cols = 15 }) => {
  const [grid, setGrid] = useState([]);
  const [currentColor, setCurrentColor] = useState("purple");

  useEffect(() => {
    const initializeGrid = () =>
      Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(null));
    setGrid(initializeGrid());

    let activeRain = []; // Tracks falling raindrops
    let activeColumns = new Set(); // Tracks columns that currently have active raindrops

    // Rain animation
    const rainInterval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = initializeGrid();

        // Update activeRain positions
        activeRain = activeRain.map(({ startRow, col }) => ({
          startRow: startRow + 1,
          col,
        }));

        // Remove raindrops that are out of bounds
        activeRain = activeRain.filter(({ startRow, col }) => {
          if (startRow >= rows) {
            activeColumns.delete(col); // Free up the column when the raindrop exits
            return false;
          }
          return true;
        });

        // Add new raindrops at random columns
        if (Math.random() < 0.5) {
          const availableColumns = Array.from(
            { length: cols },
            (_, i) => i
          ).filter((col) => !activeColumns.has(col));

          if (availableColumns.length > 0) {
            const newColumn =
              availableColumns[
                Math.floor(Math.random() * availableColumns.length)
              ];
            activeRain.push({ startRow: -6, col: newColumn });
            activeColumns.add(newColumn); // Mark column as occupied
          }
        }

        // Update the grid with raindrop positions
        activeRain.forEach(({ startRow, col }) => {
          for (let i = 0; i < 6; i++) {
            const row = startRow + i;
            if (row >= 0 && row < rows) {
              const opacity = 0.3 + i * 0.15;
              newGrid[row][col] = opacity;
            }
          }
        });

        return newGrid;
      });
    }, 30);

    setCurrentColor("purple");

    return () => {
      clearInterval(rainInterval);
    };
  }, [rows, cols]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-black">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {grid.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (cell !== null) {
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="w-6 h-6 border border-gray-600"
                  style={{
                    backgroundColor: currentColor,
                    opacity: cell,
                  }}
                ></div>
              );
            }
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-6 h-6 bg-transparent border border-gray-600"
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RainGrid;
