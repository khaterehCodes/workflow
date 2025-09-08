import Button from "../../atoms/customButton/Button";

function ActionButtons({
  onEdit,
  onDelete,
  onAdd,
  editLabel = "Modifier",
  deleteLabel = "Supprimer",
  addLabel = "Ajouter",
  size = "md",
  showEdit = true,
  showDelete = true,
  showAdd = false,
  className = "",
}) {
  const sizeClasses = {
    sm: "w-[70px] h-[28px] text-[11px]",
    md: "w-[85px] h-[32px] text-[12px]",
    lg: "w-[226px] h-[48px] text-[18px]",
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {showEdit && (
        <Button
          onClick={onEdit}
          className={`${sizeClasses[size]} font-medium border rounded-[10px] border-[#5C73DB] text-[#5C73DB]`}
        >
          {editLabel}
        </Button>
      )}
      {showDelete && (
        <Button
          onClick={onDelete}
          className={`${sizeClasses[size]} bg-[#DC2626] font-medium rounded-[10px] text-white`}
        >
          {deleteLabel}
        </Button>
      )}
      {showAdd && (
        <Button
          onClick={onAdd}
          className={`${sizeClasses[size]} bg-[#4763E4] font-medium rounded-[10px] text-white`}
        >
          {addLabel}
        </Button>
      )}
    </div>
  );
}

export default ActionButtons;
