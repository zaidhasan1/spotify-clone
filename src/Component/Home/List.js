import { useEffect } from "react";
import { useState } from "react";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let a = [];
    for (let i = 0; i < 10000; i++) {
      a.push({
        name: `Zaid ${i}`,
      });
    }
    setData(a);
  }, []);

  return (
    <>
      {data.map((obj) => {
        return (
          <>
            <p> {obj.name}</p>
          </>
        );
      })}
    </>
  );
};

export default List;
