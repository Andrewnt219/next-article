import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { EverythingApiRequest } from "@src/@types/newsapi";
import _ from "lodash";

import { languages, sortOptions, sources } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";
import { Range } from "@components/ui/form/Range";
import { Button } from "@components/ui/Button";
import { Row } from "@components/utils/Row";
import { TagInput } from "@components/ui/form/TagInput";

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
  const {
    handleSubmit,
    errors,
    register,
    formState: { isValid },
  } = useForm<EverythingFilters>({ mode: "onChange" });

  const onFormSubmit = handleSubmit((data) => {
    const emptyFilteredData = _.omitBy(data, _.isEmpty);

    onSubmit(emptyFilteredData);
  });

  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  return (
    <Form onSubmit={onFormSubmit} noValidate>
      <TextField<EverythingFilters>
        type="text"
        id="search_query"
        label="Search Term"
        name="q"
        errors={errors}
        register={register({ required: "Search Term is required!" })}
      />
      <TagInput<EverythingFilters>
        name="sources"
        placeholder="Sources"
        id="search_sources"
        label="Sources"
        register={register}
        errors={errors}
        options={sources}
      />

      <Button
        color="secondary"
        onClick={() => setDropDownIsOpen((isOpen) => !isOpen)}
      >
        Advanced Search
      </Button>

      <DropDown isActive={dropDownIsOpen}>
        <Row>
          <Select<EverythingFilters>
            register={register}
            name="sortBy"
            id="search_sortBy"
            errors={errors}
            options={sortOptions}
            label="Sort By"
            width="7.5rem"
          />

          <Select<EverythingFilters>
            register={register}
            name="language"
            id="search_language"
            errors={errors}
            options={languages}
            label="Language"
            width="3.5rem"
          />
        </Row>

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
      </DropDown>

      <Row>
        <Button
          variant="text"
          type="submit"
          color="secondary"
          disabled={isFetching || !isValid}
        >
          {isFetching ? "FETCHING..." : "SEARCH"}
        </Button>

        <Button
          variant="text"
          color="secondary"
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
const Form = styled.form<FormProps>`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

type DropDownProps = {
  isActive: boolean;
};
const DropDown = styled.div<DropDownProps>`
  display: none;

  ${(p) =>
    p.isActive &&
    css`
      display: block;
    `}
`;

export { EverythingFilter };
