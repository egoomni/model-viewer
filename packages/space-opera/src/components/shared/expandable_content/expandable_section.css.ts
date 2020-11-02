/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {css, CSSResult} from 'lit-element';
export const styles: CSSResult = css`
:host {
  --me-theme-container-background: #2b2d30;
}

.SectionContent {
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.SectionContent[open] {
  background-color: white;
  overflow: unset;
  max-height: 100vh;
  padding: 20px;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
}
`;
