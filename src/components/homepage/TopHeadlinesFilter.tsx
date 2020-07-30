import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { filterSchema } from "@src/schema/filter/filter.schema";
import { TopHeadlinesApiRequest } from "@src/@types/newsapi";
import _ from "lodash";

import { categoryNames, countryCodes } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";
import { Range } from "@components/ui/form/Range";
import { Button } from "@components/ui/Button";
import { Row } from "@components/utils/Row";

type Props = {
  onSubmit: (params: TopHeadlinesApiRequest) => void;
  isFetching: boolean;
};
type Ref = HTMLDivElement;

export type FilterFormValues = Pick<
  TopHeadlinesApiRequest,
  "country" | "q" | "category" | "pageSize"
> & {};

/**
 * @description A control for filtering topHeadlines articles
 * @param onSubmit handle submit
 * @param isFetching is the article being fetched
 */
function TopHeadlinesFilter({ onSubmit, isFetching }: Props): ReactElement {
  const { handleSubmit, errors, register } = useForm<FilterFormValues>({
    resolver: yupResolver(filterSchema),
  });

  const onFormSubmit = handleSubmit((data) => {
    const emptyFilteredData = _.omitBy(data, _.isEmpty);

    onSubmit(emptyFilteredData);
  });

  return (
    <Form onSubmit={onFormSubmit} noValidate>
      <Row justify="space-between">
        <Select<FilterFormValues>
          register={register}
          name="category"
          id="filter-category"
          errors={errors}
          options={categoryNames}
          label="Category"
          width="9.5rem"
        />

        <Select<FilterFormValues>
          register={register}
          name="country"
          id="filter-country"
          errors={errors}
          options={countryCodes}
          label="Country"
          width="3.5rem"
        />
      </Row>

      <TextField<FilterFormValues>
        type="text"
        id="filter_query"
        label="Search Term"
        name="q"
        errors={errors}
        register={register}
      />

      <Range<FilterFormValues>
        min={20}
        max={100}
        step={5}
        name="pageSize"
        register={register}
        errors={errors}
        label="Number of articles"
      />

      <Row justify="center">
        <Button
          variant="text"
          color="primary"
          type="submit"
          disabled={isFetching}
        >
          {isFetching ? "FETCHING..." : "SEARCH"}
        </Button>

        <Button
          variant="text"
          color="primary"
          type="reset"
          disabled={isFetching}
        >
          CLEAR FILTER
        </Button>
      </Row>
    </Form>
  );
}

type FormProps = {};
const Form = styled.form<FormProps>``;

export { TopHeadlinesFilter };
