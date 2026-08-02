# Cómo funciona Claude Design (y el pipeline NFCD)

> Reconstruido a fuerza de diagnóstico el 24–25/06/2026. Etiquetas: [Seguro] / [Probable] / [Suposición].

---

## Las dos capas de Claude Design

[Seguro] Claude Design tiene **dos capas distintas**, y confundirlas es la fuente de casi todo el lío:

1. **Design System** = la matriz. Tokens, componentes, templates. La marca.
2. **Projects** = donde generás piezas concretas, partiendo de un Design System.

Cada proyecto nuevo hereda el Design System. Vos creás en *Projects*; la matriz vive en *Design System*.

---

## omelette — el compilador interno

[Probable] **"omelette" NO es un comando de terminal.** Es el **compilador interno de Claude Design** (firma `x-omelette` en los archivos generados). Toma la *fuente* y produce los *compilados*:

- **Fuente** (se edita): `tokens/*.css`, `components/*.jsx`, `ui_kits/*.jsx`.
- **Compilados** (se GENERAN — nunca editar a mano):
  - `_ds_bundle.js` — el bundle JS con el código compilado de cada componente + `sourceHashes` (un hash por archivo fuente, para saber qué cambió).
  - `_ds_manifest.json` — el índice: tokens, componentes, templates, fuentes.
  - `_adherence.oxlintrc.json` — las reglas de adherencia (lint).

[Seguro] Si editás la fuente y NO recompilás, el bundle queda viejo y lo que corre sigue siendo lo anterior. **Editar fuente ≠ aplicado.** Hay que recompilar.

⚠️ **Trampa real:** un script casero de Node que regenere los `_ds_*` regenera el disco **pero NO le habla a la nube de Claude Design.** Para eso está design-sync (abajo).

---

## /design-sync — el puente a la nube

[Seguro] El **único** puente entre tu sistema local y el proyecto de Claude Design en la nube es **`/design-sync`**, y vive en **Claude Code** — no es comando de terminal, no está en la web de Design.

- [Seguro] Es **bidireccional**: *pull* (Design → repo) o *push* (repo → Design).
- [Seguro] Requiere autorización: `/design-login` (cuenta claude.ai, scope "design-system"). Sin eso, tira "DesignSync needs design-system authorization".
- [Probable] Sincroniza **componente por componente** (list/read → plan → write).
- ⚠️ [Seguro] **Saltea la carpeta `templates/`** por defecto — hay que pedírselo explícito.

---

## Las tres copias (y por qué GitHub ≠ Design)

[Seguro] El design system existe en **tres lugares separados, sin cable automático entre ellos**:

```
1. DISCO LOCAL  ──(commit+push)──▶  2. GitHub  ──(❌ NO automático)──  3. Proyecto Claude Design (nube)
                                                    └──(/design-sync desde Code)──▶ ───┘
```

- **commit + push** mueve disco → GitHub. Es versionado/respaldo. NO toca Design.
- **/design-sync** mueve disco → proyecto de Design. Es lo único que actualiza la nube.
- [Probable] El proyecto de Design se construyó desde el **montaje local**, no desde GitHub ("no GitHub source was given" dice su propio README). GitHub y Design **no están enlazados.**
- [Seguro] El conector "GitHub · CONNECTED" que se ve en Design solo da permiso de *lectura de repos en un chat*. NO es un caño de sync. Pushear a GitHub no actualiza Design.

**Consecuencia práctica:** podés tener GitHub impecable y Design seguir viejo. Para que Design tome lo nuevo: `/design-sync` desde Code, sí o sí.

---

## El modelo de las tres manos (orden de trabajo)

Nació de la confusión del 24–25/06. Tres verbos, una sola casa cada uno:

| Verbo | Casa | Qué |
|---|---|---|
| **PENSAR / decidir / diagnosticar** | **Chat** (Oscura) | Entender, planificar, investigar. No toca archivos. |
| **DISEÑAR / ver** | **Claude Design** | Lo visual: las 6 superficies. Crear, editar inline (`.dc.html`), exportar. |
| **EJECUTAR / tocar disco / sincronizar** | **Claude Code** (Seshat) | git, mover archivos, recompilar, `/design-sync`. |

Y dos que **no son para trabajar, son para guardar**:
- **GitHub** = el archivero (la matriz versionada).
- **GitHub Desktop** = el botón de guardar (commit + push: disco → archivero).

**Leyes de oro (de los errores de hoy):**
- Una sola mano por tarea. No repartir el mismo trabajo entre Chat/Cowork/Code/Design.
- Aplicar-y-commitear en el mismo gesto. Nunca "documento ahora, aplico después".
- Una sola fuente de verdad en disco. Sin copias paralelas.

---

## La matriz vs las producciones (carpetas)

- `DS-NFCD-GitHub/` = la **matriz** (va a GitHub). Lo que no cambia sin decisión.
- `design/` = las **producciones** (local, no versionado). Las piezas que salen de la matriz: PNG, PDF, HTML de cada campaña, organizadas por superficie.
- El molde y lo que sale del molde. No confundir.
