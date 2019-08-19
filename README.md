# Developers and Ducks library

## Data structure and relations

```txt
[Player] 1...n [Characters]
```

## Usage

Search classes:

```bash
dnd classes | jq '.[] |= del(.desc,.table,.archetypes,.document_slug) | map(select(.name | contains("Wizard")))'
```

Search weapons by name:

```bash
dnd weapons | jq 'map(select(.name | contains("Long")))'
dnd weapons | jq 'map(select(.category | contains("Martial")))'
```
