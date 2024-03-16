'use client';
import { useEffect, useState } from 'react';

interface IDebounce {
	searchQuery: string;
	delay: number;
}

export const useDebounce = ({ searchQuery, delay }: IDebounce) => {
	const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(searchQuery);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [searchQuery, delay]);

	return debouncedValue;
};
