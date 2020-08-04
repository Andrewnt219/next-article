import { TextField } from "@components/ui/form/TextField";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { EverythingApiRequest } from "@src/@types/newsapi";
import _ from "lodash";
import "date-fns";
import {
  DatePicker,
  DatePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { languages, sortOptions, sources } from "@src/data/newsApi.data";
import { Select } from "@components/ui/form/Select";
import { Range } from "@components/ui/form/Range";
import { Button } from "@components/ui/Button";
import { Row } from "@components/utils/Row";
import { TagInput } from "@components/ui/form/TagInput";
import { AnimatePresence, motion } from "framer-motion";

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
  /* Form */
  const {
    handleSubmit,
    errors,
    register,
    formState: { isValid },
  } = useForm<EverythingFilters>({ mode: "onChange" });

  const onFormSubmit = handleSubmit((data) => {
    if (!dropDownIsOpen) {
      return onSubmit({ q: data.q });
    }

    if (data.from && data.to && data.from > data.to) {
      [data.from, data.to] = [data.to, data.from];
    }

    const emptyFilteredData = _.omitBy(data, _.isEmpty);
    onSubmit(emptyFilteredData);
  });

  /* DropDown  */
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  /* Date-pickers */
  const datePickerConfig: Partial<DatePickerProps> = {
    inputVariant: "outlined",
    format: "yyyy-MM-dd",
    autoOk: true,
    disableFuture: true,
    inputRef: register,
    variant: "dialog",
    clearable: true,
  };

  const [fromDate, setFromDate] = React.useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

  const onFromDateChange = (date: Date | null) => {
    setFromDate(date);
  };

  const onToDateChange = (date: Date | null) => {
    setToDate(date);
  };

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

      <Button
        color="primary"
        onClick={() => setDropDownIsOpen((isOpen) => !isOpen)}
      >
        Advanced Search
      </Button>

      <AnimatePresence>
        {dropDownIsOpen && (
          <DropDown
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Row gap="2rem">
                <CustomDatePicker
                  {...datePickerConfig}
                  value={fromDate}
                  onChange={onFromDateChange}
                  name="from"
                  label="From"
                />

                <CustomDatePicker
                  {...datePickerConfig}
                  value={toDate}
                  onChange={onToDateChange}
                  name="to"
                  label="To"
                />
              </Row>
            </MuiPickersUtilsProvider>

            <Row gap="2rem">
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
            </Row>

            <TagInput<EverythingFilters>
              name="sources"
              placeholder="Sources"
              id="search_sources"
              label="Sources"
              register={register}
              errors={errors}
              options={sources}
            />

            <TagInput<EverythingFilters>
              name="domains"
              placeholder="Domains (e.g. bbc.co.uk)"
              id="search_domains"
              label="Domains"
              register={register}
              errors={errors}
              autoComplete="off"
            />
          </DropDown>
        )}
      </AnimatePresence>

      <Row gap="2rem">
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={isFetching || !isValid}
        >
          {isFetching ? "FETCHING..." : "SEARCH"}
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="reset"
          disabled={isFetching}
        >
          CLEAR
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

  & > :last-child {
    margin-top: 0rem;
  }
`;

type CustomDatePickerProps = {};
const CustomDatePicker = styled(DatePicker)<CustomDatePickerProps>`
  input {
    color: #000;
  }

  label {
    color: #77778f;

    &.Mui-focused {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;

type DropDownProps = {};
const DropDown = styled(motion.div)<DropDownProps>`
  display: block;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { EverythingFilter };
