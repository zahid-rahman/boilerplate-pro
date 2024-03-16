import { useMemo } from 'react';
import { DOTS } from '../constants/common';

interface IUsePagination {
	totalCount: number;
	pageSize: number;
	siblingCount: number;
	currentPage: number;
}

const range = (start: number, end: number): Array<number> => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: IUsePagination) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);
		const totalPageNumbers = siblingCount + 5;
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount - 1;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount - 1, totalPageCount];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount - 1;
			let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
			return [firstPageIndex, firstPageIndex + 1, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};
