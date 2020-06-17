// The interface for `api/allianceinfo`

export interface AllianceInfo {
    credits_total: number;
    credits_current: number;
    user_count: number;
    user_online_count: number;
    rank: number;
    finance_active: boolean;
}
