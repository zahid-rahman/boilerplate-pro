import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVerify = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 21" {...props}>
		<path stroke="#606161" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 10.5 2 2 4-4" />
		<path
			stroke="#606161"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M10 1.5a12 12 0 0 0 8.5 3 12 12 0 0 1-8.5 15 12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3"
		/>
	</svg>
);
export default SvgVerify;
