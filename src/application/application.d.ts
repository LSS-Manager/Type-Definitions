declare function building_maps_draw(e: any): void;
declare function buildingCaption(e: any): boolean;
declare function buildingVehicleGraphicCacheAdd(e: any): void;
declare function buildingMarkerAdd(e: any): boolean;
declare function constructBuildingListElement(e: any): void;
declare function getBuildingMarkerIcon(e: any): any;
declare function spliceLatLngs(e: any, t: any): void;
declare function buildingMarkerBulkContentCacheDraw(): void;
declare function currentHostname(): string;
declare function iconMapGenerate(e: any, t: any): void;
declare function iconMapVehicleGenerate(e: any, t: any, i: any): void;
declare function missionMarkerBlukDraw(): void;
declare function missionMarkerReset(): void;
declare function buildingsVehicleLoadVisible(): boolean;
declare function buildingsVehicleLoad(building_id: any): void;
declare function batchBuildingsVehicleLoad(building_id_array: any): void;
declare function progressBarScrollUpdate(): void;
declare function missionScrollUpdate(): void;
declare function patientMarkerAddCombined(e: any): void;
declare function patientMarkerAdd(e: any): void;
declare function prisonerMarkerAdd(e: any): void;
declare function leiststelleMinDistance(e: any, t: any): number;
declare function missionMarkerDistanceUpdate(): void;
declare function missionVehiclesShowNotInvolved(e: any): void;
declare function missionInvolved(e: any, t: any): void;
declare function missionMarkerAdd(e: any): void;
declare function missionTimerStart(e: any): void;
declare function missionTimerDelete(e: any): void;
declare function patientTimerDelete(e: any): boolean;
declare function missionTimer(e: any): void;
declare function patientBarColor(e: any): void;
declare function patientTimer(): void;
declare function patientTimerMission(e: any): void;
declare function patientFinish(e: any): void;
declare function patientDelete(e: any): void;
declare function prisonerDelete(e: any): void;
declare function missionFinish(e: any): void;
declare function missionDelete(e: any): void;
declare function vehicleMarkerAdd(e: any): boolean;
declare function vehicleDrive(e: any): boolean;
declare function vehicleDriveAdd(params: any): boolean;
declare function vehicle_image_reload(): void;
declare function vehicleCreateOnMap(e: any, t: any): void;
declare function vehicleSonderrechte(e: any): void;
declare function vehicleDriveReal(e: any): boolean;
declare function allianceChatBanCountdown(e: any, t: any): void;
declare function missionCountdown(e: any, t: any): void;
declare function taskCountdown(e: any, t: any): void;
declare function vehicleArrivalCountdown(e: any, t: any, i: any): void;
declare function extensionCountdown(e: any, t: any): void;
declare function educationCountdown(e: any, t: any): void;
declare function highlightElement(e: any): void;
declare function creditsUpdate(e: any): void;
declare function tasksUpdate(e: any, t: any): void;
declare function updateSaleCountDown(): void;
declare function setupSaleTimer(e: any, t: any, i: any): void;
declare function saleEnded(e: any): void;
declare function updateSaleCountdownTimer(e: any, t: any): void;
declare function updateSaleCountdownProgressBar(e: any, t: any, i: any): void;
declare function getFormattedDuration(e: any): string;
declare function coinsUpdate(e: any): void;
declare function messageUnreadUpdate(e: any): void;
declare function number_format(e: any, t: any): string;
declare function formatTimeDescription(e: any): any;
declare function formatTime(e: any, t: any): any;
declare function vehicleArrive(e: any): void;
declare function rand(e: any, t: any): any;
declare function missionSpeed(e: any): void;
declare function missionRequest(): void;
declare function lightboxShowClose(e: any): void;
declare function lighboxCalculateHeight(): void;
declare function lightboxOpen(e: any): void;
declare function lightboxAdjust(): void;
declare function lightboxClose(): void;
declare function distance(e: any, t: any, i: any, n: any): number;
declare function allianceMenu(e: any): void;
declare function allianceCandidatureCount(e: any): void;
declare function allianceMessageNew(e: any): void;
declare function allianceNewsNew(e: any): void;
declare function allianceForumNew(e: any): void;
declare function newsNew(e: any): void;
declare function graphicPackNewMessages(e: any): void;
declare function play(e: any): boolean;
declare function isLoggedIn(): boolean;
declare function mobileShow(e: any): void;
declare function mobileBridgeRequest(): string;
declare function mobileBridgeAdd(e: any, t: any): void;
declare function mobileDirectBridgeCall(): void;
declare function showNewBuildingDialog(): void;
declare function hideFAQButton(e: any): void;
declare function checkDesign(e: any): void;
declare function tellParent(e: any): void;
declare function missionSelectionOnly(e: any): void;
declare function missionSelectionUpdateButtons(): boolean;
declare function missionSelection(e: any): void;
declare function missionSelectionActive(e: any): void;
declare function missionSelectionDeactive(e: any): void;
declare function missionSelectionSave(): void;
declare function missionSelectionLoad(): void;
declare function leitstelleSelectionOnly(e: any): void;
declare function leitstelleSelection(e: any): void;
declare function leitstelleSelectionActive(e: any): void;
declare function leitstelleSelectionDeactive(e: any): void;
declare function buildingSelectionOnly(e: any, t: any): void;
declare function buildingSelection(e: any, t: any): void;
declare function buildingSelectionActive(button: any): void;
declare function buildingSelectionDeactive(button: any): void;
declare function buildingSelectionSave(): void;
declare function buildingSelectionLoad(): void;
declare function searchStations(): void;
declare function vehicle_group_available(
    vehicle_group_id: any,
    calculate_time: any
): void;
declare function aao_maxtime(e: any, t: any): any;
declare function aao_available(e: any, t: any): void;
declare function unix_timestamp(): number;
declare function osrm_geometry_decode(e: any, t: any): any[];
declare function change_state(e: any): void;
declare function bigMapWindowSizeChanged(): void;
declare function bigMapWindowPositionSave(): void;
declare function bigMapWindowPositionRestore(): void;
declare function bigMapWindowPositionRestoreWindow(e: any, t: any): void;
declare function bigMapWindowPositionGet(e: any): any[];
declare function bigMapMenuOpenClose(e: any): void;
declare function bigMapMenuOpen(e: any): void;
declare function bigMapMenuClose(e: any): void;
declare function bigMapWindowInfront(e: any): void;
declare function padding(e: any): string;
declare function toggleVehicleBuilding(e: any): void;
declare function hideVehicleBuildingHelpText(e: any): string;
declare function setClientId(e: any): void;
declare function allianceChannelUpdate(e: any): void;
declare function faye_subscribe(channel_update: any): void;
declare function openExternalTelegramURL(e: any): void;
declare function setupTimer(e: any): void;
declare function updateTimer(e: any): void;
declare function isDateValid(e: any): boolean;
declare function flavouredAsset(e: any, t: any): any;
declare function updateDailyBonusIcon(): void;
declare function switchWorld(e: any): boolean;
declare function updateButtonState(e: any, t: any): void;
declare function onAndroidBack(): boolean;
declare function missionPositionMarkerAdd(e: any): void;
declare function missionPositionMarkerDelete(e: any): void;
declare function deleteMissionPosition(e: any): void;
declare function initMapFiltersCollection(e: any): void;
declare function getMapFilterOptions(): any;
declare function updateMapFilterOptions(e: any): void;
declare function clearMap(e: any): void;
declare function currentMarkerTypeFilterTurnedOn(e: any): any;
declare let map: any,
    alliance_member_buildings_show: any,
    geocoder: any,
    directionsService: any,
    building_eval_unload: any,
    building_markers: any[],
    building_markers_cache: any[],
    building_timers: any[],
    building_marker_image: string,
    mission_markers: any[],
    mission_position_new_marker: any,
    mission_timers: any[],
    patient_timers: any[],
    mission_vehicles: any[],
    vehicle_delay_timers: any[],
    window_focus: boolean,
    title_default: string,
    title_counter: number,
    missionScrollUpdateWait: boolean,
    mission_label: boolean,
    vehicle_label: boolean,
    vehicle_label_backup: boolean,
    audio: boolean,
    audio_chat: boolean,
    audio_chat_highlight: boolean,
    iframe_lightbox_number: number,
    leitstelle_latitude: boolean,
    leitstelle_longitude: boolean,
    leitstelles: any[],
    alliance_mission_distance: boolean,
    mobile_bridge_content: any[],
    mobile_bridge_use: boolean,
    mobile_version: number,
    vehicle_markers: any[],
    icon_empty: any,
    vehicles_not_involved: any[],
    alliance_show_not_involved_vehicle: boolean,
    vehicle_graphics: any[],
    vehicle_graphics_sorted: any[],
    mission_graphics: any[],
    target_marker: boolean,
    patient_timer_last_call: any,
    eventTimer: any,
    eventRunning: boolean,
    lightbox_static: boolean,
    mobile_show_vehicle: boolean,
    show_vehicle: boolean,
    alliance_ignore_fms: boolean,
    buildingResetContentPossible: boolean,
    buildingVehicleCache: {},
    aao_types: any[],
    alliance_coadmin: boolean,
    alliance_admin: boolean,
    routes: {},
    missionMarkerBulkAdd: boolean,
    patientBulkCache: {},
    prisonerBulkCache: {},
    buildingMarkerBulkContentCache: any[],
    mapViewExpanded: boolean,
    mapViewExpandedWindow: boolean,
    alliance_chat_ban_countdown_timer: any,
    mission_overview_timer: any,
    mission_overview_last_count: any,
    buildingVehicleGraphicCache: {},
    TIME_MODIFIER_SONDERRECHTE: number,
    TIME_MODIFIER_NORMAL: number,
    sale_count_down: Date,
    count_down_title: any,
    saleTimeout: any,
    apng_supported: boolean,
    gameFlavour: any,
    i18nPrefix: any;
declare let mapKitFactoryVehicleAnnotation: (
    e: any,
    t: any
) => HTMLImageElement;
declare let current_state: string,
    breadcrumbnav: {
        init: (e: any) => void;
        back: () => void;
        add: (t: any) => void;
        clear: () => void;
    };
declare let dynamicLayouter: {
        init: () => void;
        initLayouter: () => void;
        resize: () => void;
        initCookiesBannerLayouter: () => void;
        recalculateCookiesBanner: () => void;
        resizeFunctions: () => {};
        clear: () => void;
    },
    BUTTON_STATES: {
        loading: string;
        enabled: string;
        disabled: string;
    };
declare let windowIsTurbolinked: boolean,
    cookiesEu: {
        init: () => void;
        addListener: (e: any) => void;
        setCookie: () => void;
    };
declare let bind: (e: any, t: any) => () => any;
declare let tutorial: {
    init: (e: any, t: any) => void;
    start: () => void;
    restart: () => void;
    goToStep: (e: any) => void;
    loadTutorial: (e: any) => void;
    tutorialLoadedHandler: (e: any) => void;
    tutorialConfigLoadedHandler: (e: any) => void;
    load_config: (e: any, t: any) => void;
    setCurrentStep: (e: any) => void;
    trackStep: (e: any) => void;
    finish: () => void;
    complete: () => void;
    setCurrentTourConfig: (e: any) => void;
    isRunning: () => boolean;
    mobileStep: (e: any) => void;
    mobileComplete: () => void;
    mobileCloseLightbox: () => void;
    callBuildingLoadContentListener: (e: any) => void;
    setBuildingLoadContentListener: (e: any) => void;
    callNewMissionListener: (e: any) => void;
    setNewMissionListener: (e: any) => void;
    callLightBoxCloseListener: () => void;
    setLightBoxCloseListener: (e: any) => void;
    append_close_tutorial_modal: () => void;
    close_tutorial: () => void;
};
declare let STORAGE_KEY_MOBILE_CLIENT_ID: string,
    STORAGE_KEY_UNIQUE_CLIENT_ID: string,
    STORAGE_KEY_DEACTIVE_MISSION_SELECTION: string,
    STORAGE_KEY_DEACTIVE_BUILDING_SELECTION: string,
    STORAGE_KEY_BIG_MAP_WINDOW_POSITIONS: string,
    mc_storage: {
        get: (e: any) => any;
        setToLocalStorage: (e: any, t: any) => void;
        setToSessionStorage: (e: any, t: any) => void;
        setToCookieStorage: (e: any, t: any) => void;
        getFromNameSpacedStorage: (e: any, t: any) => any;
        setToNameSpacedLocalStorage: (e: any, t: any, i: any) => void;
        setToNameSpacedSessionStorage: (e: any, t: any, i: any) => void;
        setToNameSpacedCookieStorage: (e: any, t: any, i: any) => void;
        getNameSpacedStorage: (e: any) => any;
        getFromStorages: (e: any, t: any) => any;
    },
    map_pois_service: {
        getMissionPoiMarkersArray: () => any[];
        leafletMissionPositionMarkerAdd: (t: any) => void;
        leafletMissionPositionMarkerDelete: (t: any) => void;
        mapkitMissionPositionMarkerAdd: (t: any) => void;
        mapkitMissionPositionMarkerDelete: (t: any) => void;
        mapkitMissionPositionMarkerDeleteAll: () => void;
    },
    map_filters_service: {
        initialize: (s: any) => void;
        getMapFiltersLayersForMap: () => {};
        getMapFiltersLayers: () => {};
        getFilterLayerByBuildingParams: (e: any) => any;
        getFilterLayerByMissionParams: (e: any) => any;
        onOverlayChanged: (e: any) => void;
        massFiltersChange: (t: any, n: any) => void;
        decorateFilterText: (t: any, i: any) => any;
    };
declare let originalTranslate: any;
