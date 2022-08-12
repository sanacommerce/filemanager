import { findIndex } from 'lodash';

export const
  isDef = thing => thing !== undefined,

  noop = _ => { },

  addToSelection = ({ selection, ids, toHead = false }) => {
    const filteredIds = ids.filter(id => !selection.includes(id));

    return toHead
      ? [...filteredIds, ...selection]
      : [...selection, ...filteredIds];
  },

  removeFromSelection = ({ selection, id }) => selection.filter(sid => sid !== id),

  // TODO: when needed, refactor utils to accept idPropName argument
  // which defined unique key (currently only 'id' is supported)
  selectRange = ({ items, fromId, toId }) => {
    const fromIdIndex = findIndex(items, ({ id }) => id === fromId);
    const toIdIndex = findIndex(items, ({ id }) => id === toId);
    const selectionDirection = toIdIndex > fromIdIndex ? 1 : -1;
    const itemsSlice = selectionDirection === 1 ?
      items.slice(fromIdIndex, toIdIndex + 1) :
      items.slice(toIdIndex, fromIdIndex + 1);

    const selection = itemsSlice.map(({ id }) => id)

    return selection
  },

  selectNext = ({ items, lastSelected: currentId, count }) => {
    const currentIndex = findIndex(items, ({ id }) => id === currentId);
    const nextIndex = currentIndex + count < items.length ? currentIndex + count : currentIndex;
    const nextId = items[nextIndex].id;

    return {
      selection: [nextId],
      scrollToIndex: nextIndex,
    };
  },

  selectPrev = ({ items, lastSelected: currentId, count }) => {
    const currentIndex = findIndex(items, ({ id }) => id === currentId);

    if (currentIndex <= -1) {
      // Fix for fast selection updates
      return {
        scrollToIndex: 0
      }
    }

    const prevIndex = currentIndex - count < 0 ? currentIndex : currentIndex - count;
    const prevId = items[prevIndex].id;

    return {
      selection: [prevId],
      scrollToIndex: prevIndex,
    }
  },

  addNextToSelection = ({ selection, items, lastSelected, count }) => {
    const nextSelectionData = selectNext({ items, lastSelected, count });

    return {
      selection: addToSelection({
        selection,
        ids: selectRange({ items, fromId: lastSelected, toId: nextSelectionData.selection[0] }),
      }),
      scrollToIndex: nextSelectionData.scrollToIndex,
    }
  },

  addPrevToSelection = ({ selection, items, lastSelected, count }) => {
    const prevSelectionData = selectPrev({ items, lastSelected, count });

    return {
      selection: addToSelection({
        selection,
        ids: selectRange({ items, fromId: lastSelected, toId: prevSelectionData.selection[0] }),
        toHead: true,
      }),
      scrollToIndex: prevSelectionData.scrollToIndex,
    }
  },

  removeLastFromSelection = ({ selection, items, count }) => {
    if (selection.length > 1) {
      const nextSelection = selection.slice(0, selection.length - count);

      return {
        selection: nextSelection,
        scrollToIndex: findIndex(items, ({ id }) => id === nextSelection[nextSelection.length - 1])
      }
    }

    return {
      selection,
      scrollToIndex: findIndex(items, ({ id }) => id === selection[0])
    }
  },

  removeFirstFromSelection = ({ selection, items, count }) => {
    if (selection.length > 1) {
      const nextSelection = selection.slice(count);

      return {
        selection: nextSelection,
        scrollToIndex: findIndex(items, ({ id }) => id === nextSelection[0])
      }
    }

    return {
      selection,
      scrollToIndex: findIndex(items, ({ id }) => id === selection[0])
    }
  },

  selectFirstItem = ({ items }) => ({
    selection: items.length ? [items[0].id] : [],
    scrollToIndex: items.length ? 0 : null
  }),

  selectLastItem = ({ items }) => ({
    selection: items.length ? [items[items.length - 1].id] : [],
    scrollToIndex: items.length ? items.length - 1 : null
  });
