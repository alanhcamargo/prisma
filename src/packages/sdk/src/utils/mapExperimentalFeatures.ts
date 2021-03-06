const featureFlagMap = {
  transactionApi: 'transaction',
}

export function mapExperimentalFeatures(features?: string[]): string[] {
  if (Array.isArray(features) && features.length > 0) {
    return features.map((f) => featureFlagMap[f] ?? f)
  }

  return []
}
