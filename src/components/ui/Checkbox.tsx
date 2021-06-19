import { Check } from "@styled-icons/feather";
import { Children } from "../../types/Preact";
import styled, { css } from "styled-components";

const CheckboxBase = styled.label`
    gap: 4px;
    z-index: 1;
    padding: 4px;
    display: flex;
    border-radius: 4px;
    align-items: center;

    cursor: pointer;
    font-size: 18px;
    user-select: none;

    transition: 0.2s ease all;

    p {
        margin: 0;
    }

    input {
        display: none;
    }
`;

const CheckboxContent = styled.span`
    flex-grow: 1;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    flex-direction: column;
`;

const CheckboxDescription = styled.span`
    font-size: 0.8em;
    font-weight: 400;
    color: var(--secondary-foreground);
`;

const Checkmark = styled.div<{ checked: boolean }>`
    margin: 4px;
    width: 24px;
    height: 24px;
    display: grid;
    border-radius: 4px;
    place-items: center;
    background: var(--secondary-background);

    svg {
        color: var(--secondary-background);
        stroke-width: 2;
    }

    ${(props) =>
        props.checked &&
        css`
            background: var(--accent);
        `}
`;

export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    className?: string;
    children: Children;
    description?: Children;
    onChange: (state: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxBase disabled={props.disabled}>
            <CheckboxContent>
                <span>{props.children}</span>
                {props.description && (
                    <CheckboxDescription>
                        {props.description}
                    </CheckboxDescription>
                )}
            </CheckboxContent>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={() =>
                    !props.disabled && props.onChange(!props.checked)
                }
            />
            <Checkmark checked={props.checked}>
                <Check size={20} />
            </Checkmark>
        </CheckboxBase>
    );
}