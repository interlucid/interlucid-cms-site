import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypePrimaryNavigationFields {
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypePrimaryNavigationSkeleton = EntrySkeletonType<
    TypePrimaryNavigationFields,
    "primaryNavigation"
>;
export type TypePrimaryNavigation<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypePrimaryNavigationSkeleton, Modifiers, Locales>;
export type TypePrimaryNavigationWithoutLinkResolutionResponse =
    TypePrimaryNavigation<"WITHOUT_LINK_RESOLUTION">;
export type TypePrimaryNavigationWithoutUnresolvableLinksResponse =
    TypePrimaryNavigation<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePrimaryNavigationWithAllLocalesResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypePrimaryNavigation<"WITH_ALL_LOCALES", Locales>;
export type TypePrimaryNavigationWithAllLocalesAndWithoutLinkResolutionResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypePrimaryNavigation<
    "WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES",
    Locales
>;
export type TypePrimaryNavigationWithAllLocalesAndWithoutUnresolvableLinksResponse<
    Locales extends LocaleCode = LocaleCode,
> = TypePrimaryNavigation<
    "WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES",
    Locales
>;
