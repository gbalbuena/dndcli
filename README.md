# opendnd5e

## setup

```txt
npm i
npm link
dnd
```

## Armor

```bash
$ dnd armor --format=json | jq -r .[].name
  ...

$ dnd weapons -f json | jq -r .[].name
  ...

```

## Armor class

```bash
dnd ac -a no_armor -d -1 -s 1 -h 1 | jq .
```

```bash
dnd ac \
  --armor_id no_armor \
  --dexterity_modifier -1 \
  --shield 1 \
  --half_cover 1 \
  | jq .
{
  "ac": 13
}
```
