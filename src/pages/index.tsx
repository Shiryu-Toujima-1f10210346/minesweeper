import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 9 | 10 | -1)[][]>([
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 0
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 1
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 2
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 3
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 4
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 5
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 6
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 7
    [-1, -1, -1, -1, -1, -1, -1, -1, -1], // 8
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
    [1, 2, 3, 4, 5, 6, 7, 8, 9], // 1
    [1, 2, 3, 4, 5, 6, 7, 8, 9], // 2
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
    if (userInputs[y][x] === -1) {
      setUserInputs((prev) => {
        const newBoard = [...prev];
        newBoard[y][x] = 10;
        return newBoard;
      });
    } else if (userInputs[y][x] === 10) {
      setUserInputs((prev) => {
        const newBoard = [...prev];
        newBoard[y][x] = 9;
        return newBoard;
      });
    } else if (userInputs[y][x] === 9) {
      setUserInputs((prev) => {
        const newBoard = [...prev];
        newBoard[y][x] = -1;
        return newBoard;
      });
    }
  };

  const openCell = (x: number, y: number) => {
    if (userInputs[y][x] === -1) {
      console.log('open');
      setUserInputs((prev) => {
        const newBoard = [...prev];
        newBoard[y][x] = 0;
        return newBoard;
      });
    } else if (userInputs[y][x] === 10) {
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.top} />
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((cell, x) => (
              <div
                className={styles.cell}
                style={{
                  backgroundPosition: `${(cell - 1) * -30}px 0`,
                  position: 'relative', // Add position property
                }}
                onContextMenu={(event) => onClickCell(x, y, event)}
                key={`${x}-${y}`}
              >
                {/* Place the cover inside the cell */}
                <div
                  className={styles.cover}
                  style={
                    userInputs[y][x] === 0
                      ? { visibility: 'hidden' }
                      : {
                          visibility: 'visible',
                          backgroundPosition: `${(userInputs[y][x] - 1) * -22}px 0`,
                        }
                  }
                  onClick={(event) => onClickCell(x, y, event)}
                  onContextMenu={(event) => onClickCell(x, y, event)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;

/*

*/
