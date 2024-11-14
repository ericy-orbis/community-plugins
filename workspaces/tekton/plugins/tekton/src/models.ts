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
import { GroupVersionKind, tektonGroupColor } from './types/types';

export const PipelineRunGVK: GroupVersionKind = {
  apiVersion: 'v1',
  apiGroup: 'tekton.dev',
  kind: 'PipelineRun',
};

export const PipelineRunModel = {
  ...PipelineRunGVK,
  abbr: 'PLR',
  color: tektonGroupColor,
};

export const TaskRunGVK: GroupVersionKind = {
  apiVersion: 'v1',
  apiGroup: 'tekton.dev',
  kind: 'TaskRun',
};

export enum ModelsPlural {
  pipelineruns = 'pipelineruns',
  taskruns = 'taskruns',
  pods = 'pods',
}

export const tektonResourceModels: { [key: string]: GroupVersionKind } = {
  [ModelsPlural.pipelineruns]: PipelineRunGVK,
  [ModelsPlural.taskruns]: TaskRunGVK,
};