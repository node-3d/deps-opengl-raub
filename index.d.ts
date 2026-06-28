import type { getPaths } from '@node-3d/addon-tools';

type AddonPaths = ReturnType<typeof getPaths>;

export declare const bin: AddonPaths['bin'];
export declare const include: AddonPaths['include'];

declare const paths: AddonPaths;
export default paths;
