"use client";

import { ISharedStringHelperTextChangedEventArgs, SharedStringHelper } from "@fluid-experimental/react-inputs";
import { useState, useRef, FormEvent, useEffect } from "react";

interface ICollaborativeTextAreaProps {
    sharedStringHelper: SharedStringHelper;
}

export const CollaborativeTextArea = (props: ICollaborativeTextAreaProps): JSX.Element => {

    // Setup React state and references.
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const selectionStartRef = useRef<number>(0);
    const selectionEndRef = useRef<number>(0);

    const [text, setText] = useState<string>(props.sharedStringHelper.getText());

    // Handle a change event in the textarea.
    const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
        if (!textAreaRef.current) {
            throw new Error("Handling change without current textarea ref?");
        }
        const textArea = textAreaRef.current;
        const newText = textArea.value;

        const newCaratPosition = textArea.selectionStart;

        const oldText = text;
        const oldSelectionStart = selectionStartRef.current;
        const oldSelectionEnd = selectionEndRef.current;

        // Update the shared string with the new text.
        storeSelectionInReact();
        setText(newText);

        const isTextInserted = newCaratPosition - oldSelectionStart > 0;
        if (isTextInserted) {
            const insertedText = newText.substring(oldSelectionStart, newCaratPosition);
            const isTextReplaced = oldSelectionEnd - oldSelectionStart > 0;
            if (isTextReplaced) {
                const replacedText = oldText.substring(oldSelectionStart, oldSelectionEnd);
                props.sharedStringHelper.replaceText(insertedText, oldSelectionStart, oldSelectionEnd);
            }
            else {
                props.sharedStringHelper.insertText(insertedText, oldSelectionStart);
            }
        } else {
            const charactersDeleted = oldText.length - newText.length;
            props.sharedStringHelper.removeText(newCaratPosition, oldSelectionStart + charactersDeleted);
        }
    };

    // Set the selection in textarea element (update the UI).
    const setSelectionInTextArea = (start: number, end: number) => {
        if (!textAreaRef.current) {
            throw new Error("Trying to set selection without current textarea ref?");
        }
        const textArea = textAreaRef.current;
        textArea.selectionStart = start;
        textArea.selectionEnd = end;
    };

    // Store current selection from the textarea element in the React ref.
    const storeSelectionInReact = () => {
        if (!textAreaRef.current) {
            throw new Error("Trying to remember selection without current textarea ref?");
        }
        const textArea = textAreaRef.current;
        const textAreaSelectionStart = textArea.selectionStart;
        const textAreaSelectionEnd = textArea.selectionEnd;
        selectionStartRef.current = textAreaSelectionStart;
        selectionEndRef.current = textAreaSelectionEnd;
    };

    // Detect changes in sharedStringHelper and update React/UI as necessary.
    useEffect(() => {
        const onTextChanged = (event: ISharedStringHelperTextChangedEventArgs) => {
            const newText = props.sharedStringHelper.getText();
            setText(newText);
            if (!event.isLocal) {
                const newSelectionStart = event.transformPosition(selectionStartRef.current);
                const newSelectionEnd = event.transformPosition(selectionEndRef.current);
                setSelectionInTextArea(newSelectionStart, newSelectionEnd);
                storeSelectionInReact
            }
        };
        props.sharedStringHelper.on("textChanged", onTextChanged);
        return () => {
            props.sharedStringHelper.off("textChanged", onTextChanged);
        }
    }, [props.sharedStringHelper]);
    
    // Create and configure a textarea element that will be used in CollaborativeText.tsx.

    return (
        <div>
            <textarea
                rows={20}
                cols={50}
                ref={textAreaRef}
                onBeforeInput={storeSelectionInReact}
                onKeyDown={storeSelectionInReact}
                onClick={storeSelectionInReact}
                onContextMenu={storeSelectionInReact}
                onChange={handleChange}
                value={text} />
        </div>
    );
}