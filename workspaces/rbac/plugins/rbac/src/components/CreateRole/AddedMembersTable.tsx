/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import { Table } from '@backstage/core-components';

import { makeStyles } from '@material-ui/core';
import { FormikErrors } from 'formik';

import { getMembers } from '../../utils/rbac-utils';
import { selectedMembersColumns } from './AddedMembersTableColumn';
import { RoleFormValues, SelectedMember } from './types';

const useStyles = makeStyles(theme => ({
  empty: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

type AddedMembersTableProps = {
  selectedMembers: SelectedMember[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<FormikErrors<RoleFormValues>> | Promise<void>;
};

export const AddedMembersTable = ({
  selectedMembers,
  setFieldValue,
}: AddedMembersTableProps) => {
  const classes = useStyles();
  return (
    <Table
      title={
        selectedMembers.length > 0
          ? `Users and groups (${getMembers(selectedMembers)})`
          : 'Users and groups'
      }
      data={selectedMembers}
      columns={selectedMembersColumns(selectedMembers, setFieldValue)}
      emptyContent={
        <div className={classes.empty}>
          No records. Selected users and groups appear here.
        </div>
      }
    />
  );
};
