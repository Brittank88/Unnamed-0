// priority: 100

settings.logAddedRecipes    = true ;
settings.logRemovedRecipes  = true ;
settings.logSkippedRecipes  = false;
settings.logErroringRecipes = false;

console.info(
	                                                                                                                                    '\n' +
	'[0]========================================================================[0]'                                                  + '\n' +
	'| | ____ ____ ____ _  _ ____ ____     ____ ____ ____ _ ___  ___     _ ____ | |'                                                  + '\n' +
	'| | [__  |___ |__/ |  | |___ |__/     [__  |    |__/ | |__]  |      | [__  | |'                                                  + '\n' +
	'| | ___] |___ |  |  ||  |___ |  | ___ ___] |___ |  | | |     |  @ ._| ___] | |'                                                  + '\n' +
	'| |                                                                        | |'                                                  + '\n' +
	'[0]========================================================================[0]'                                                  + '\n' +
	`| |${' '.repeat(18)}settings.logAddedRecipes    = ${settings.logAddedRecipes   .toString().padEnd(5, ' ')};${' '.repeat(18)}| |` + '\n' +
	`| |${' '.repeat(18)}settings.logRemovedRecipes  = ${settings.logRemovedRecipes .toString().padEnd(5, ' ')};${' '.repeat(18)}| |` + '\n' +
	`| |${' '.repeat(18)}settings.logSkippedRecipes  = ${settings.logSkippedRecipes .toString().padEnd(5, ' ')};${' '.repeat(18)}| |` + '\n' +
	`| |${' '.repeat(18)}settings.logErroringRecipes = ${settings.logErroringRecipes.toString().padEnd(5, ' ')};${' '.repeat(18)}| |` + '\n' +
	'[0]========================================================================[0]'
);