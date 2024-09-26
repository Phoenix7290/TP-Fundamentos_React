import PropTypes from "prop-types";
import { useState } from "react";
import Styles from "./styles.module.css";

const TodoItem = ({ item, isCompleted, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(item);

  const handleComplete = () => {
    onComplete(item);
  };

  const handleDeleteItem = () => {
    onDelete(item);
  };

  const handleEditItem = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveItem = () => {
    onEdit(item, editItem);
    setIsEditing(false);
  };

  return (
    <>
      <li
        className={Styles.itemList}
        style={{ color: isCompleted ? "green" : "black" }}
      >
        {isEditing ? (
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
          />
        ) : (
          item
        )}
        <button onClick={handleComplete}>
          {isCompleted ? "Desmarcar" : "Concluir"}
        </button>
        <button onClick={handleEditItem}>Editar</button>
        {isEditing && <button onClick={handleSaveItem}>Salvar</button>}
        <button onClick={handleDeleteItem}>Excluir</button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoItem;
