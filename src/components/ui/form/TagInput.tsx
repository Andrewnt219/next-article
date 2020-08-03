import { CustomInput } from "@src/@types/react-hook-form";
import React, {
  InputHTMLAttributes,
  ReactElement,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Tag } from "./Tag";
import _ from "lodash";
import { AnimatePresence } from "framer-motion";

export const DelimiterKeycode: Record<"enter" | "comma", number> = {
  enter: 13,
  comma: 188,
};
type Option = {
  name: string;
  id: string;
};
type Props<FormValues> = CustomInput<FormValues> &
  InputHTMLAttributes<HTMLInputElement> & {
    options?: Option[];
  };

/**
 * @description renders a tag input with autocomplete
 * @param options data for autocomplete
 */
function TagInput<FormValues>({
  options,
  register,
  label,
  id,
  ...inputProps
}: Props<FormValues>): ReactElement {
  const { name } = inputProps;

  const [tags, setTags] = useState<string[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Adding a new tag
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const {
      keyCode,
      currentTarget: { value },
    } = event;
    const newTagValue = value.trim();

    if (isValidKeyPressed(keyCode)) {
      // prevent the delimiter appear
      event.preventDefault();

      // add new value to tags list
      if (tags) {
        const newTags = _.compact(_.uniq([...tags, newTagValue]));
        setTags(newTags);
      } else setTags([newTagValue]);

      // clear the input
      inputRef.current!.value = "";
    }
  };

  const onTagDeleted = (deletedTagValue: string) => {
    if (tags) {
      const newTags = tags.filter((tag) => tag !== deletedTagValue);
      setTags(newTags);
    }
  };

  return (
    <Container>
      <InputContainer>
        <AnimatePresence>
          {tags &&
            tags.map((tag) => (
              <Tag key={tag} onClick={onTagDeleted}>
                {tag}
              </Tag>
            ))}
        </AnimatePresence>
        <Input
          {...inputProps}
          onKeyDown={(e) => onKeyDown(e)}
          list="datalist"
          type="text"
          ref={inputRef}
        />

        <Label htmlFor={id}>{label}</Label>
      </InputContainer>

      {options && (
        <datalist id="datalist">
          {options.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </datalist>
      )}

      <input
        hidden
        readOnly
        value={tags ? tags.join(",") : ""}
        name={name}
        ref={register}
      />
    </Container>
  );
}

function isValidKeyPressed(keycode: number): boolean {
  return !!Object.values(DelimiterKeycode).find(
    (delimiterCode) => delimiterCode === keycode
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type InputContainerProps = {};
const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 5rem;

  padding: 0 1.25rem 1rem 1.25rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  position: relative;

  & > * {
    margin-top: 1rem;

    :not(:last-child) {
      margin-right: 0.25rem;
    }
  }

  :focus-within {
    border-color: ${(p) => p.theme.palette.primary.main};

    label {
      background: #fff;
      visibility: visible;
      transform: translateY(-50%);
    }
  }
`;

type InputProps = {};
const Input = styled.input<InputProps>`
  border: none;
  background: none;
  outline: none;
`;

type LabelProps = {};
const Label = styled.label<LabelProps>`
  position: absolute;
  top: -1rem;
  left: 1.25rem;

  display: inline-block;
  padding: 0 0.25rem;
  pointer-events: none;
  transition: all 200ms ease;
  visibility: hidden;

  color: ${(p) => p.theme.palette.text.primary};
`;
export { TagInput };
