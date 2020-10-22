import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNext, setPrev, setColumns } from "../reducer/actions";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { Table } from "react-bootstrap";
import { Loader } from "./Loader";

export const Tables = () => {
  const dispatch = useDispatch();
  const { from, to, page, isLoading } = useSelector((state) => state);

  const nextPage = () => {
    dispatch(setNext());
  };
  const prevPage = () => {
    dispatch(setPrev());
  };

  function OnDragEnd(result) {
    const items = Array.from(page);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setColumns(items));
  }

  const Card = () => {
    return (
      <>
        <thead>
          <tr>
            <th>symbol</th>
            <th>sector</th>
            <th>askPrice</th>
            <th>askSize</th>
            <th>bidPrice</th>
            <th>bidSize</th>
            <th>lastSalePrice</th>
            <th>lastSaleSize</th>
            <th>lastSaleTime</th>
            <th>volume</th>
          </tr>
        </thead>
        {Object.entries(page).map(
          (
            [
              n,
              {
                symbol,
                sector,
                askPrice,
                askSize,
                bidPrice,
                bidSize,
                lastSalePrice,
                lastSaleSize,
                lastSaleTime,
                volume,
              },
            ],
            index
          ) => (
            <Draggable draggableId={n} index={index} key={symbol}>
              {(provided) => (
                <tbody
                  key={n}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <tr>
                    <td>{symbol}</td>
                    <td>{sector}</td>
                    <td>{askPrice}</td>
                    <td>{askSize}</td>
                    <td>{bidPrice}</td>
                    <td>{bidSize}</td>
                    <td>{lastSalePrice}</td>
                    <td>{lastSaleSize}</td>
                    <td>{new Date(lastSaleTime).toLocaleDateString()}</td>
                    <td>{volume}</td>
                  </tr>
                </tbody>
              )}
            </Draggable>
          )
        )}
      </>
    );
  };
  return (!isLoading ? <Loader/> :
    <DragDropContext onDragEnd={OnDragEnd}>
      <div className="table-box">
        {from !== 0 ? (
          <button className="prev-btn" onClick={() => prevPage()}>{`<`}</button>
        ) : (
          <div className="prev-btn"></div>
        )}
        {to !== 9210 ? (
          <button className="next-btn" onClick={() => nextPage()}>{`>`}</button>
        ) : (
          <div className="next-btn"></div>
        )}
        <div className="table-block">
          <Droppable droppableId="0">
            {(provided) => (
              <Table
                className="shares-table"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Card />
                {provided.placeholder}
              </Table>
            )}
          </Droppable>
        </div>
        <p className="page-number">Page {to / 10}</p>
      </div>
    </DragDropContext>
  );
};
