# Developers and Ducks library

## Data structure relations

`Player 1 .. n Characters`

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

## Usage

### Install in local

```bash
npm link
```

## Encounter

```bash
dnd encounter --player='Good Paladin' \
              --creature='Imp' \
              --creature='Chicken'
```

## Characters

### Create

```bash
dnd character create
```

### Find by name

```bash
dnd character ls --name EvilPaladin
```

## Creatures or Monsters

### Create

```bash
dnd creature create --name=Chicken
```

### Find by name

```bash
dnd creature ls --name Chicken
```

## Weapons

### List and search

```bash
$ dnd weapons ls | grep 'Simple Ranged Weapons'
┌───────────────┬──────────────────────┬─────┬───────────────┬───────┬───────────────────────────────────────────────────┐
│      Name     │       Category       │ Cost│     Damage    │ Weight│                     Properties                    │
├───────────────┼──────────────────────┼─────┼───────────────┼───────┼───────────────────────────────────────────────────┤
│Crossbow, light│Simple Ranged Weapons │25 gp│1d8 piercing   │5 lb.  │Ammunition (range 80/320),loading,two-handed       │
│Dart           │Simple Ranged Weapons │5 cp │1d4 piercing   │1/4 lb.│Finesse,thrown (range 20/60)                       │
│Shortbow       │Simple Ranged Weapons │25 gp│1d6 piercing   │2 lb.  │Ammunition (range 80/320),two-handed               │
│Sling          │Simple Ranged Weapons │1 sp │1d4 bludgeoning│0 lb.  │Ammunition (range 30/120)                          │
...
```

## Skills

### List and search

```bash
$ dnd skills ls | grep 'Athletics'
┌───────────────┬────────────┐
│      Name     │  Modifier  │
├───────────────┼────────────┤
│Athletics      │strength    │
...
```
