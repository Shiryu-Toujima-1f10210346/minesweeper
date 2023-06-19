import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const [userInputs, setUsetInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombCount = 10;
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  // -1 ->stone
  // 0 -> 空
  // 1 ~ 8 -> 周りの爆弾の数
  // 9 -> ？
  // 10 -> flag
  // 11 -> bomb
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // 1
    [0, 0, 9, 10, 11, 12, 13, 14, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 4
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 5
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 6
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 7
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 8
  ]);
  const onClickCell = (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.button === 2) {
      setFlag(x, y);
    } else {
      openCell(x, y);
    }
  };

  const setFlag = (x: number, y: number) => {
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[y][x] = 10;
      return newBoard;
    });
  };

  const openCell = (x: number, y: number) => {
    if (board[y][x] === -1) {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[y][x] = 0;
        return newBoard;
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((cell, x) => (
              <div
                className={cell === 0 ? styles.voidCell : styles.cell}
                style={{
                  backgroundPosition: `${(cell - 1) * -30}px 0`,
                }}
                key={`${x}-${y}`}
                onClick={(event) => onClickCell(x, y, event)}
                onContextMenu={(event) => onClickCell(x, y, event)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
