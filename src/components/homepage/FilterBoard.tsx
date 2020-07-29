import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { filterSchema } from "@src/schema/filter/filter.schema";
import { TopHeadlinesApiRequest } from "@src/@types/newsapi";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import _ from "lodash";

import { categoryNames, countryCodes } from "@src/data/newsApi.data";

type Props = {
  onSubmit: (params: TopHeadlinesApiRequest) => void;
};
export type FilterFormValues = Pick<
  TopHeadlinesApiRequest,
  "country" | "q" | "category"
> & {};

/**
 * @description A control for filtering fetched articles
 * @param onSubmit handle submit
 */
function FilterBoard({ onSubmit }: Props): ReactElement {
  const { handleSubmit, errors, register } = useForm<FilterFormValues>({
    resolver: yupResolver(filterSchema),
  });

  const onFormSubmit = handleSubmit((data) => {
    const emptyFilteredData = _.omitBy(data, _.isEmpty);

    onSubmit(emptyFilteredData);
  });
  return (
    <Container>
      <Form onSubmit={onFormSubmit} noValidate>
        <TextField<FilterFormValues>
          type="text"
          id="filter_query"
          label="Search Term"
          name="q"
          errors={errors}
          register={register}
        />

        <InputLabel htmlFor="filter-category">Category</InputLabel>
        <Select
          native
          inputRef={register}
          inputProps={{
            name: "category",
            id: "filter-category",
          }}
        >
          <option aria-label="None" value="" />
          {renderOptions(categoryNames)}
        </Select>

        <InputLabel htmlFor="filter-country">Country Code</InputLabel>
        <Select
          native
          inputRef={register}
          inputProps={{
            name: "country",
            id: "filter-country",
          }}
        >
          <option aria-label="None" value="" />
          {renderOptions(countryCodes)}
        </Select>

        <SubmitButton type="submit">SEARCH</SubmitButton>
      </Form>
    </Container>
  );
}

function renderOptions(optionsData: string[]): ReactElement[] {
  return optionsData.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type FormProps = {};
const Form = styled.form<FormProps>``;

type SubmitButtonProps = {};
const SubmitButton = styled(Button)<SubmitButtonProps>``;

export { FilterBoard };
