/**
 * @license
 * Copyright 2017 GIVe Authors
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

var GIVe = (function (give) {
  'use strict'

  /**
   * Object representing a corrdinate track, see `GIVe.TrackObject` for details.
   * @typedef {object} CoorTrack
   * @class give.CoorTrack
   *
   * @constructor
   * @implements give.TrackObject
   * @param {string} ID - The ID of the new track object
   * @param {object} Settings - Settings of the new track. Dictionary format.
   *   Note that if `Settings` has a property named `settings`,
   *   it will be merged with `this.Settings`, while properties in
   *   `Settings.settings` take precedence in cases of conflict names
   * @param {RefObjectLiteral} ref - the reference the track is using
   * @param {string} groupID - The group ID of the new track object
   */
  give.CoorTrack = function (ID, Settings, ref, groupID) {
    give.TrackObject.apply(this, arguments)
  }

  give.extend(give.TrackObject, give.CoorTrack)

  /**
   * getType - get the key strings showing this type of data.
   *    This shall be the same as the `type` column for track entries in
   *    `trackDb` table so that GIVE is able to figure out the track is of this
   *    type.
   *
   * @returns {Array<string>}  return all keys matching this type.
   */
  give.CoorTrack.getType = function () {
    return ['coordinate', 'coor']
  }

  // specify the visualization object used in this track
  give.CoorTrack.prototype._DomObjCtor = give.CoorTrackDOM

  // __IMPORTANT:__ register this new track type
  give.TrackObject.registerTrack(give.CoorTrack)

  return give
})(GIVe || {})
