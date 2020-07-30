import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { EverythingApiRequest } from "@src/@types/newsapi";
import _ from "lodash";

import { categoryNames, countryCodes } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";
import { Range } from "@components/ui/form/Range";
import { Button } from "@components/ui/Button";
import { Row } from "@components/utils/Row";

type Props = {
  onSubmit: (params: EverythingApiRequest) => void;
  isFetching: boolean;
};

export type EverythingFilters = Omit<
  EverythingApiRequest,
  "qInTitle" | "excludeDomains" | "page"
> & {};

/**
 * @description A control for filtering topHeadlines articles
 * @param onSubmit handle submit
 * @param isFetching is the article being fetched
 */
function EverythingFilter({ onSubmit, isFetching }: Props): ReactElement {
  const { handleSubmit, errors, register } = useForm<EverythingFilters>();

  const onFormSubmit = handleSubmit((data) => {
    const emptyFilteredData = _.omitBy(data, _.isEmpty);

    onSubmit(emptyFilteredData);
  });

  return (
    <Form onSubmit={onFormSubmit} noValidate>
      <Row justify="space-between">
        <Select<EverythingFilters>
          register={register}
          name="sortBy"
          id="search_sortBy"
          errors={errors}
          options={categoryNames}
          label="Category"
          width="9.5rem"
        />

        <Select<EverythingFilters>
          register={register}
          name="language"
          id="search_language"
          errors={errors}
          options={countryCodes}
          label="Country"
          width="3.5rem"
        />
      </Row>

      <TextField<EverythingFilters>
        type="text"
        id="search_query"
        label="Search Term"
        name="q"
        errors={errors}
        register={register}
      />

      <Range<EverythingFilters>
        min={20}
        max={100}
        step={5}
        name="pageSize"
        register={register}
        errors={errors}
        label="Number of articles"
        id="search_pageSize"
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

export { EverythingFilter };
