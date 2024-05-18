import PoeNinja from "../../../../AbstractClass/PoeNinja";
/**
 * Represents a module for handling Allflame Ember items in the PoeNinja library.
 */
class AllflameEmberModule extends PoeNinja {
    /**
     * Creates an instance of AllflameEmberModule.
     * @param league - The league name.
     * @param typeName - The type name.
     */
    constructor(league: string, typeName: string) {
        // The type name.
        const type: string = "AllflameEmber";
        super(league, typeName, type);
    }
}

export default AllflameEmberModule;
