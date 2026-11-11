import QuestItem from "./QuestItem";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect } from "@jest/globals";

const createdQuest = {
    id: 1,
    title: "Falar com o Ferreiro",
    status: "aberto",
    created_at: new Date(Date.now()).toUTCString(),
};

const concludedQuest = {
    id: 2,
    title: "Falar com o cavaleiro",
    status: "concluido",
    created_at: new Date(Date.now()).toUTCString(),
};

describe("testando item", () => {
    test("testando se está visivel", () => {
        render(<QuestItem quest={createdQuest} />);

        expect(screen.getByTestId("quest-item")).toBeVisible();

        expect(screen.getByTestId("quest-title").textContent).toBe("Falar com o Ferreiro");
    });

    test("testando se a edição está acessivel", () => {
        render(<QuestItem quest={createdQuest} />);

        expect(screen.getByTestId("edit-button")).toBeVisible();

        fireEvent.click(screen.getByTestId("edit-button"));

        expect(screen.getByTestId("edit-input")).toBeVisible();

        expect(screen.getByTestId("edit-input")).toHaveValue("Falar com o Ferreiro");
    })

    test("testando se edição é bloqueada quando concluida", () => {
        render(<QuestItem quest={concludedQuest} />);
        expect(screen.queryByTestId("edit-button")).toBeNull();
    });
});