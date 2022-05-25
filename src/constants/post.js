export const ALL_GROUP = "all";
export const ALL_LABEL = "전체";

export const DEVERLOP_GROUP = "develop";
export const DEVERLOP_LABEL = "개발";
export const REACT = "React";
export const JAVASCRIPT = "JavaScript";
export const ES6 = "ES6";
export const TYPESCRIPT = "Typescript";
export const NEXTJS = "Nextjs";
export const BROWSER = "Browser";
export const LIBRARYS = "Librarys";
export const HTTP = "HTTP";

export const BOOK_GROUP = "book";
export const BOOK_LABEL = "책";
export const REFACTORING2 = "Refactoring2";

export const TIL_GROUP = "TIL";
export const TIL_LABEL = "기록";
export const TIL = "TIL";

export const POST_GROUP = [ALL_GROUP, DEVERLOP_GROUP, BOOK_GROUP, TIL_GROUP];

export const POST_LABEL = {
  [ALL_GROUP]: ALL_LABEL,
  [DEVERLOP_GROUP]: DEVERLOP_LABEL,
  [BOOK_GROUP]: BOOK_LABEL,
  [TIL_GROUP]: TIL_LABEL,
};

export const POST_TAGS = {
  [DEVERLOP_GROUP]: [REACT, JAVASCRIPT, ES6, TYPESCRIPT, NEXTJS, BROWSER, LIBRARYS, HTTP],
  [BOOK_GROUP]: [REFACTORING2],
  [TIL_GROUP]: [TIL],
};
