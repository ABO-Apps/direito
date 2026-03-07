import { motion } from 'motion/react';

export function ChessboardTransition() {
  // Create a 8x8 grid
  const squares = Array.from({ length: 64 }, (_, i) => ({
    id: i,
    row: Math.floor(i / 8),
    col: i % 8,
  }));

  return (
    <div className="relative h-32 overflow-hidden">
      {/* Chessboard reveal effect */}
      <div className="absolute inset-0 grid grid-cols-8 gap-0">
        {squares.map((square) => (
          <motion.div
            key={square.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: (square.row + square.col) * 0.02,
              ease: "easeOut",
            }}
            className={`aspect-square ${
              (square.row + square.col) % 2 === 0
                ? 'bg-white'
                : 'bg-red-600'
            }`}
          />
        ))}
      </div>

      {/* Center piece reveal */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0 }}
        whileInView={{ opacity: 0.15, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-8xl text-red-600">♛</div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900" />
    </div>
  );
}
