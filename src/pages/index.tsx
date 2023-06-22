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
  const bombCount = 10;
  // -1 ->stone
  // 0 -> 空
  // 1 ~ 8 -> 周りの爆弾の数
  // 9 -> ？
  // 10 -> flag
  // 11 -> bomb
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
  ]);

  const direction = [
    [-1, -1], //左上
    [0, -1], //上
    [1, -1], //右上
    [1, 0], //右
    [1, 1], //右下
    [0, 1], //下
    [-1, 1], //左下
    [-1, 0], //左
  ];
  //bombMapを参照しdirectionを使って周りの爆弾の数を計算してboardにセットする
  const setBombCount = (): void => {
    const newBoard: number[][] = [...board]; // Create a copy of the board

    for (let row = 0; row < bombMap.length; row++) {
      for (let col = 0; col < bombMap[row].length; col++) {
        if (bombMap[row][col] === 11) {
          // If a bomb is found at current position
          for (const [dx, dy] of direction) {
            const newRow = row + dy;
            const newCol = col + dx;

            if (
              newRow >= 0 &&
              newRow < bombMap.length &&
              newCol >= 0 &&
              newCol < bombMap[row].length &&
              bombMap[newRow][newCol] !== 11
            ) {
              // Increment the count in the corresponding board cell
              newBoard[newRow][newCol]++;
            }
          }
        }
      }
    }

    setBoard(newBoard); // Update the board with the new counts
    console.log('↓BombCount↓');
    console.table(board);
  };

  //boardにbombMapをセットする

  const mergeMap = (): void => {
    const newBoard: number[][] = [];

    for (let row = 0; row < Math.max(bombMap.length, board.length); row++) {
      const newRow: number[] = [];
      for (let col = 0; col < Math.max(bombMap[row]?.length || 0, board[row]?.length || 0); col++) {
        const bombValue = bombMap[row]?.[col] || 0;
        const boardValue = board[row]?.[col] || 0;
        newRow.push(bombValue === 11 ? bombValue : boardValue);
      }
      newBoard.push(newRow);
    }

    setBoard(newBoard); // Update the board with the new counts
    console.log('↓Merged Map↓');
    console.table(board);
  };

  const onClickCell = (x: number, y: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.button === 2) {
      setFlag(x, y);
    } else {
      openCell(x, y);
    }
  };
  //最初にクリックしたときに押した座標以外に爆弾を配置する
  const setBomb = (x: number, y: number) => {
    const newBombMap = [...bombMap];
    for (let i = 0; i < bombCount; i++) {
      const bombX = Math.floor(Math.random() * 9);
      const bombY = Math.floor(Math.random() * 9);
      if (bombX === x && bombY === y) {
        i--;
        continue;
      }
      if (newBombMap[bombY][bombX] === 11) {
        i--;

        continue;
      }
      newBombMap[bombY][bombX] = 11;
    }
    setBombMap(newBombMap);
    setBombCount();
    mergeMap();
    console.log('↓bombMap↓');
    console.table(bombMap);
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
    console.log('↓userInputs↓');
    console.table(userInputs);
  };

  const openCell = (x: number, y: number) => {
    //userInputsの値が全て-1のときに爆弾設置
    if (userInputs.every((row) => row.every((cell) => cell === -1))) {
      setBomb(x, y);
    }
    if (bombMap[y][x] === 11) {
      console.log('gameover');
      document.getElementsByClassName(styles.gameover)[0].innerHTML = 'ぼかーん!';
    }
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
        <div className={styles.top}>
          <div className={styles.reset} />
          <div className={styles.gameover} />
        </div>
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
