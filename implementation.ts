interface AgentConversationService {
  // Core conversation management
  shuruNayiBaatCheet(
    agentIds: string[],
    sandarbh: BaatCheetSandarbh
  ): Promise<BaatCheet>;

  prabhavitKareinUpyogakartaSandesh(conversationId: string, message: string): Promise<void>;

  // Response generation
  pratikriyaUtpatti(
    zilaId: string,
    agentId: string,
    sandesh: string,
    sandarbh?: BaatCheetSandarbh
  ): Promise<{
    pratikriya: string;
    bhavnaSoochank: number;
    vishaySuchi: string[];
  }>;

  // Agent lifecycle management
  panjikritKareinAgent(agent: Agent): Promise<void>;
  praptKareinPanjikritAgents(): Map<string, Agent>;
}

// Conversation State Analysis
interface BaatCheetRajya {
  bhavnatmakGati:
    {
      tanav: number;
      sehmat: number;
      samvedna: number;
    };
  aapasKiBaatCheetKeChitra:
    {
      shrotaBolneKaSantulan: number;
      pratikriyaDer: number[];
      vishayShuruKarneKiGinti: Map<string, number>;
    };
  paryavaranSandarbh:
    {
      shor: number;
      bheed: number;
      samaySeema: boolean;
    };
}
