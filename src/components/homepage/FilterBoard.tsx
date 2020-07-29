import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement, forwardRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { filterSchema } from "@src/schema/filter/filter.schema";
import { TopHeadlinesApiRequest } from "@src/@types/newsapi";
import MuiButton from "@material-ui/core/Button";
import _ from "lodash";

import { categoryNames, countryCodes } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";
import { Range } from "@components/ui/form/Range";

type Props = {
  onSubmit: (params: TopHeadlinesApiRequest) => void;
  isFetching: boolean;
  className?: string;
};
type Ref = HTMLDivElement;

export type FilterFormValues = Pick<
  TopHeadlinesApiRequest,
  "country" | "q" | "category" | "pageSize"
> & {};

/**
 * @description A control for filtering fetched articles
 * @param onSubmit handle submit
 * @param isFetching is the article being fetched
 * @param className for styled-components
 */
const FilterBoard = forwardRef<Ref, Props>(
  ({ onSubmit, isFetching, className }, ref): ReactElement => {
    const { handleSubmit, errors, register } = useForm<FilterFormValues>({
      resolver: yupResolver(filterSchema),
    });

    const onFormSubmit = handleSubmit((data) => {
      const emptyFilteredData = _.omitBy(data, _.isEmpty);

      onSubmit(emptyFilteredData);
    });
    return (
      <Container ref={ref} className={className}>
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
      </Container>
    );
  }
);

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 35rem;
  padding: 2rem 2rem 3rem 2rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

type FormProps = {};
const Form = styled.form<FormProps>``;

type RowProps = {
  justify?: "space-between" | "space-around" | "space-evenly" | "center";
};
const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(p) => p.justify};
`;

type ButtonProps = {};
const Button = styled(MuiButton)<ButtonProps>`
  font-size: inherit;
  padding: 1rem 1.5rem;
`;

export { FilterBoard };
