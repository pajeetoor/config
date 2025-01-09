interface VectorSangrahSeva {
  abhivaktiSrijan(lekhan: string): Promise<number[]>;

  prashna(paarameters: {
    sankhyaYukti: number[];
    chhanna?: Record<string, any>;
    shreshthK?: number;
    metadataShaamilKaren?: boolean;
  }): Promise<PrashnaParinam>;

  punahSthaapan(paarameters: {
    pehchaan: string;
    moolya: number[];
    metadata: Record<string, any>;
  }): Promise<void>;
}
