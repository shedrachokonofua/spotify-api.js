/**
 * SimplifiedTrack Structure
 */
import Artist from './Artist';
import { DominantColor, CodeImageReturn, Restriction } from './Interface';
import Util from '../Spotify';
import LinkedTrack from "./LinkedTrack";

const util = new Util();

/**
 * SimplifiedTrack Class
 */
class SimplifiedTrack {

    data: any;
    availableMarkets: string[];
    discNumber: number;
    duration: number;
    explicit: boolean;
    externalUrls: any;
    href: string;
    id: string;
    name: string;
    previewUrl: string;
    trackNumber: number;
    type: string;
    uri: string;
    local: boolean | null;
    restrictions: Restriction | null;
    playable?: boolean;
    linkedFrom?: LinkedTrack;
    codeImage?: string;
    dominantColor?: DominantColor;

    /**
     * **Example:**
     * 
     * ```js
     * const track = new SimplifiedTrack(data);
     * ```
     * 
     * @param data Received raw data from the spotify api
     */
    constructor(data){

        Object.defineProperty(this, 'data', { value: data, writable: false });

        this.availableMarkets = data.available_markets || [];
        this.discNumber = data.disc_number;
        this.duration = data.duration_ms;
        this.explicit = data.explicit;
        this.externalUrls = data.external_urls;
        this.href = data.href;
        this.id = data.id;
        this.name = data.name;
        this.previewUrl = data.preview_url;
        this.trackNumber = data.track_number;
        this.type = data.type;
        this.uri = data.uri;
        this.playable = data.is_playable;
        this.restrictions = data.restrictions || null;
        this.local = Boolean(data.is_local);
        if('linked_from' in data) this.linkedFrom = data.linked_from;

    };

    /**
     * Returns the array of Artist
     * @readonly
     */
    get artists(): Artist[] {
        return this.data.artists.map(x => new Artist(x));
    };

    /**
     * Returns the code image with dominant color
     */
    async getCodeImage(): Promise<CodeImageReturn> {
        return await util.getCodeImage(this.uri);
    };

    /**
     * Returns the uri data
     */
    async getURIData(): Promise<any> {
        return await util.getURIData(this.uri);
    };

    /**
     * Check wheater if it is restricted or not
     * @readonly
     */
    get restricted(): boolean {
        return Boolean(this.restrictions);
    };

};

export default SimplifiedTrack;