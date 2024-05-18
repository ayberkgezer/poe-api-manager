import PoeNinja from "../../../../AbstractClass/PoeNinja";

/**
 * Represents a module for handling skill gems.
 */
class SkillGemModule extends PoeNinja {
  /**
   * Creates an instance of SkillGemModule.
   * @param league - The league name.
   * @param typeName - The type name.
   */
  constructor(league: string, typeName: string) {
    const type: string = "SkillGem";
    super(league, typeName, type);
  }
}

export default SkillGemModule;
