interface SaathAIConfig {
  modelKaNaam: string; // e.g., "saathcomputer/llama-2-70b-chat"
  maxShabd: number; // typically 512
  garmiKaLevel: number; // 0.7 for balanced responses
  chatKaRange: number; // 0.8 for good diversity
  dohrahatKiSaza: number; // 1.1 to prevent loops
}

interface VectorBhandarConfig {
  aakar: number; // 1536 for Saath AI embeddings
  maapDand: "cosine" | "euclidean" | "dotproduct";
  dukan: number;
  pratiroop: number;
  dukanKaPrakar: string;
}
