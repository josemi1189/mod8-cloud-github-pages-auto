import { AppLayout } from "@/layout";

import { CharacterList } from "@/pods/character-list";
import React from "react";

export const CharacterListScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterList />
    </AppLayout>
  );
};
