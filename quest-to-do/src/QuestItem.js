import { useState } from "react";

export default function QuestItem({ props }) {
    const [title, setTitle] = useState(props.quest.title);
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.quest.status === "concluido";

    return (
        <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex gap-4 items-center w-full sm:w-[80%]">
                <input
                    disabled={concluded}
                    type="checkbox"
                    checked={checked}
                    className="checkbox rounded-full border" 
                />
                <p className="break-words">
                    {props.quest.title}
                </p>
            </div>
            <div className="flex gap-4 w-full sm:w-fit justify-center">
                <button onClick={() => setEditMode(!editMode)}>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    )
}