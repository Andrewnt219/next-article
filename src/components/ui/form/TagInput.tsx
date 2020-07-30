import { CustomInput } from "@src/@types/react-hook-form";
import React, {
  InputHTMLAttributes,
  ReactElement,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

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
    options: Option[];
  };

/**
 * @description renders a tag input with autocomplete
 * @param options data for autocomplete
 */
function TagInput<FormValues>({
  options,
  register,
  label,
  ...inputProps
}: Props<FormValues>): ReactElement {
  const { name, id } = inputProps;

  const [tags, setTags] = useState<string[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Adding a new tag
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const {
      keyCode,
      currentTarget: { value },
    } = event;

    if (isValidKeyPressed(keyCode)) {
      // prevent the delimiter appear
      event.preventDefault();

      // add new value to tags list
      if (tags) {
        const newTags = [...tags, value];
        setTags(newTags);
      } else setTags([value]);

      // clear the input
      inputRef.current!.value = "";
    }
  };

  return (
    <Container>
      {tags && tags.map((tag) => <span>{tag}</span>)}

      <input
        hidden
        value={tags ? tags.join(",") : ""}
        name={name}
        id={id}
        ref={register}
      />

      <input
        onKeyDown={(e) => onKeyDown(e)}
        list="datalist"
        type="text"
        ref={inputRef}
      />
      <datalist id="datalist">
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </datalist>
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

export { TagInput };
