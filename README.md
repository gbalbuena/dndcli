# Developers and Ducks library

## Data tree

```txt
Collections
  -> globals (shared)
  -> universe
     -> creatures
     -> players
     -> campaigns
        -> sessions
           -> encounters (Initiative Roll -> Round -> Turn)
```

## Usage

### Install in local

```bash
npm link
```

### Use dnd-cli

```bash
dnd <resource> [options]
```

## Cli

Work in progress

### Encounter

```bash
dnd encounter --player='Good Paladin' \
              --creature='Imp' \
              --creature='Chicken'
```

### Creatures

#### Create

```bash
dnd creature create --name=Chicken
```

#### Find by name

```bash
dnd creature find --name Chicken
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
│Sling          │Simple Ranged Weapons │1 sp │1d4 bludgeoning│0 lb.  │Ammunition (range 30/120)
```
