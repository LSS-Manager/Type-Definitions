/*
 File:               application-e88092dab62208086a358353d5e4354d.js
 Server:             en_GB
 Time:               2021-06-13T20:19:07+02:00
 */

import { RadioMessage, EventMessage, BuildingMarker } from './types';
import { LatLng } from 'leaflet';

export * from './chat';
export * from './missionWindow';

export function check_and_enable_apng_support(): void;

export function searchMission(): void;

export function mission_overview_timer_call(): void;

export function successfullMessage(HTMLContent: string): void;

export function mission_participation_add(missionId: number): void;

export function allianceChatHeaderInfo(HTMLContent: string): void;

export function mapkitDeselectAnnotation(): void;

export function mapExpand(isWindowDesign: boolean): void;

export function mapViewOnly(): void;

export function mapViewDesignBigMap(): void;

export function mapViewResize(): void;

export function mapViewResizeDesignBigMap(): void;

export function mapViewRestore(): void;

export function radioMessage(radioMessage: RadioMessage): boolean | void;

export function vehicleSearch(id: number): void;

export function saveFcm(): void; // One of the most important functions!

export function missionLabel(): void; // Toggle mission labels according to global mission_label var

export function vehicleLabel(): void; // Toggle vehicle labels according to global vehicle_label var

export function setTitle(): void;

export function mapMoveToSearch(): void;

export function mapIsVisible(location: [number, number] | LatLng): boolean;

export function buildingLoadContent(url: string): void; // set content of #buildings div

export function buildingResetContent(): void; // reset to #buildings buildingslist view

export function buildingResetContentWhenPossible(): void;

export function buildingMarkerReset(): void;

export function iconAnchorCalculate(
    iconDimensions: [number, number]
): [number, number];

export function eventAnnounce(eventMessage: EventMessage): void;

export function alliance_ignore_fms_set(
    allianceIgnoreFMS: boolean,
    sendPostRequest: boolean
): void;

export function premium(premiumState: boolean): void;

export function zoom_change(): void; // Used as Event-Listener Function

export function map_moved(): void; // Used as Event-Listener Function

export function building_load_alliance(): void; // load and show alliance buildings (up to 100) on visible part of map

export function building_load_alliance_app(
    min_lat: number,
    max_lat: number,
    min_lng: number,
    max_lng: number
): undefined | boolean; // load and show alliance buildings (up to 100) within bounds defined by parameters

export function building_maps_redraw(): void;

export function building_maps_draw(buildingMarker: BuildingMarker): void;

export function buildingCaption(id: number): string | false;

export function buildingVehicleGraphicCacheAdd(
    buildingMarker: BuildingMarker
): void;

export function buildingMarkerAdd(
    buildingMarker: BuildingMarker
): boolean | undefined;

export function constructBuildingListElement(
    buildingMarker: BuildingMarker
): void;

export function getBuildingMarkerIcon(buildingMarker: BuildingMarker): any; //TODO: come back here later when analyzed flavouredAsset

export function spliceLatLangs(
    buildingMarker: BuildingMarker,
    length: number
): void;

export function buildingMarkerBulkContentCacheDraw(): void;

export function currentHostname(): string;
