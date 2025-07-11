import { puniPathRoot } from '@puni/root'
import type { Package } from '@puni/types/service/config/package'
import { requireFileSync } from '@puni/utils/fs/require'

/** puni的package.json */
export const pkg = () => requireFileSync<Package>(`${puniPathRoot}/package.json`)
